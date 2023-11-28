import z from 'zod'
const usersSchema = z.object({
    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username title is required'
    }),
    first_name: z.string(),
    last_name: z.string(),
    password: z.string().min(7, {message: 'Must be 5 characters or longer'}).max(20, {message: 'Must be 20 or fewer characters long'}),
    telephone: z.number().min(6).max(15),
    created_at: z.date(),
    modified_at: z.date()
})

export function validateUser (input) {
    return usersSchema.parse(input)
}

export function validatePartialUser (input) {
    return usersSchema.partial().safeParse(input)
}