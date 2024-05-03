import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must me atleast 2 characters")
  .max(20, "Username must be no more than 20 character");



export const signUpSchema=z.object({
    username: usernameValidation,
    eamil: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6,{message:"password must be atleast 6 character"})
})