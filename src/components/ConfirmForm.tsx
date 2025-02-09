"use client"

import { addRegister } from "@/notion"
import JSConfetti from "js-confetti"
import Form from "next/form"
import { useActionState, useEffect, useRef } from "react"

export const ConfirmForm = () => {
  const initialState = undefined

  const [state, formAction, pending] = useActionState(addRegister, initialState)

  const confettiRef = useRef<JSConfetti | null>(null)

  useEffect(() => {
    if (!confettiRef.current) {
      confettiRef.current = new JSConfetti()
      console.log('confetti created')
    }
    
    if (state?.success) {
      confettiRef.current.addConfetti({emojis: ['👰🏻‍♀️', '🤵🏻', '🍾', '🥂', '💍'], confettiNumber: 100, emojiSize: 50})
    }
  }, [state])
  
  return (
    <Form action={formAction} className="flex flex-col gap-5 items-center my-10 max-w-md mx-auto">
      <label htmlFor="name" >
        Nom
        <input type="text" name="name" id="name" />
        {state?.errors?.name && <small className="text-red-500">{state.errors.name.join(", ")}</small>}
      </label>
      <label htmlFor="surname">
        Cognom
        <input type="text" name="surname" id="surname" />
        {state?.errors?.surname && <small className="text-red-500">{state.errors.surname.join(", ")}</small>}
      </label>
      <label htmlFor="email">
        Correu electrònic
        <input type="email" name="email" id="email" />
        {state?.errors?.email && <small className="text-red-500">{state.errors.email.join(", ")}</small>}
      </label>
      <label htmlFor="food">
        Menú
        <select name="food" id="food">
          <option value="Sense restriccions">Sense restriccions</option>
          <option value="Celiac">Celíac</option>
          <option value="Vegetaria">Vegetarià</option>
          <option value="Vegà">Vegà</option>
        </select>
        {state?.errors?.food && <small className="text-red-500">{state.errors.food.join(", ")}</small>}
      </label>
      {pending && <p>Enviant la teva confirmació!</p>}
      <button type="submit" disabled={pending} className="disabled:bg-gray-400 font-semibold">Confirmar assistència</button>
    </Form>
  )
}