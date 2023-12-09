import z from 'zod'
const usersSchema = z.object({
    id: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Id is required'
    }),
    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required'
    }),
    password: z.string().min(6, {message: 'Must be 6 characters or longer'}).max(30, {message: 'Must be 30 or fewer characters long'}),
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

export function validateCreateUser (input) {
    return usersSchema.partial({id: true, telephone: true, created_at: true, modified_at: true}).safeParse(input)
}