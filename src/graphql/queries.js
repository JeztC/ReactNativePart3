import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories {
        repositories {
            edges {
                node {
                    ownerName
                    fullName
                    description
                    language
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                    ownerAvatarUrl
                }
            }
        }
    }
`

export const GET_USER_INFO = gql`
    {
        me {
            id
            username
        }
    }
`

// other queries...