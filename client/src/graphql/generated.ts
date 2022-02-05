import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Mutation = {
    __typename?: 'Mutation'
    RegisterUser?: Maybe<Scalars['Int']>
}

export type MutationRegisterUserArgs = {
    user: UserInput
}

export type Query = {
    __typename?: 'Query'
    numberSeven: Scalars['Int']
    numberSix: Scalars['Int']
}

export type User = {
    __typename?: 'User'
    email: Scalars['String']
    password: Scalars['String']
    username: Scalars['String']
}

export type UserInput = {
    email: Scalars['String']
    password: Scalars['String']
    username: Scalars['String']
}

export type RegisterUserMutationVariables = Exact<{
    user: UserInput
}>

export type RegisterUserMutation = {
    __typename?: 'Mutation'
    RegisterUser?: number | null
}

export const RegisterUserDocument = gql`
    mutation RegisterUser($user: UserInput!) {
        RegisterUser(user: $user)
    }
`
export type RegisterUserMutationFn = Apollo.MutationFunction<
    RegisterUserMutation,
    RegisterUserMutationVariables
>

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RegisterUserMutation,
        RegisterUserMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<
        RegisterUserMutation,
        RegisterUserMutationVariables
    >(RegisterUserDocument, options)
}
export type RegisterUserMutationHookResult = ReturnType<
    typeof useRegisterUserMutation
>
export type RegisterUserMutationResult =
    Apollo.MutationResult<RegisterUserMutation>
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
>
