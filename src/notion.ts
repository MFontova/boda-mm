"use server"

import { Client } from "@notionhq/client"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { unstable_cache } from 'next/cache'
import 'server-only'
import { z } from "zod"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getPage = unstable_cache(
  async (slug: string) => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PAGES_DATABASE!,
      filter: {
        property: "page",
        rich_text: {
          equals: slug
        }
      }
    })
    
    const page = response.results.find((p) => 'properties' in p) as PageObjectResponse | undefined;
  
    if (!page) return null;
  
    if(page.properties.title.type === 'rich_text' && page.properties.description.type === 'rich_text') {
      return {
        title: page.properties.title.rich_text[0].plain_text,
        description: page.properties.description.rich_text.length == 0 ? '' : page.properties.description.rich_text[0].plain_text
      }
    }
  },
  ['page'],
  {revalidate: 1, tags: ['page']}
)

export const getAllRegisters = async () => {
  const registers = await notion.databases.query({
    database_id: process.env.NOTION_CONFIRM_DATABASE!,
  })

  console.log('registers', registers.results[0])
}

const registerSchema = z.object({
  name: z.string().min(2, {message: 'El nom ha de tenir dos lletres com a mínim'}),
  surname: z.string().min(2, {message: 'El cognom ha de tenir dos lletres com a mínim'}),
  email: z.string().email({message: 'El correu no és vàlid'}),
  food: z.string(),
  other: z.ostring()
})

export const addRegister = async (prevState: unknown, formData: FormData) => {
  console.log('formData', formData)
  const registerFormData = Object.fromEntries(formData)
  const validatedRegisterData = registerSchema.safeParse(registerFormData)

  if(!validatedRegisterData.success) {
    const formFieldErrors = validatedRegisterData.error.flatten().fieldErrors

    return {
      errors: {
        name: formFieldErrors.name,
        surname: formFieldErrors.surname,
        email: formFieldErrors.email,
        food: formFieldErrors.food
      }
    }
  }

  const { name, surname, email, food, other } = registerFormData

  const results = await notion.databases.query({
    database_id: process.env.NOTION_CONFIRM_DATABASE!,
    filter: {property: 'Email', rich_text: {equals: email.toString()}}
  })

  console.log('exists', results)

  const exists = results.results.length > 0

  if(exists) {
    return {success: false, duplicateEmail: true}
  }

  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_CONFIRM_DATABASE!,
    },
    properties: {
      'Nom': {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: name as string
            }
          }
        ]
      },
      'Cognom': {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: surname as string
            }
          }
        ]
      },
      'Email': {
        type: 'email',
        email: email as string
      },
      'Menú': {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: food as string
            }
          }
        ]
      },
      'Altres': {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: other as string || ''
            }
          }
        ]
      }
    }
  })

  return {success: true}
}

export const getTimming = async () => {
  const timming = await notion.databases.query({
    database_id: process.env.NOTION_TIMMING_DATABASE!,
  })

  const results = (timming.results as PageObjectResponse[])

  return results.map(r => {
    if(r.properties.time.type === 'rich_text' && r.properties.title.type === 'title') {
      return {
        time: r.properties.time.rich_text[0].plain_text,
        title: r.properties.title.title[0].plain_text
      }
    }
  })
}

export const getPresents = async () => {
  const presents = await notion.databases.query({
    database_id: process.env.NOTION_PRESENTS_DATABASE!,
  })

  const results = (presents.results as PageObjectResponse[])

  return results.map(r => {
    if(r.properties.title.type === 'title' && r.properties.description.type === 'rich_text' && r.properties.account.type === 'rich_text') {
      return {
        title: r.properties.title.title[0].plain_text,
        description: r.properties.description.rich_text[0].plain_text,
        account: r.properties.account.rich_text[0].plain_text,
      }
    }
  })
}