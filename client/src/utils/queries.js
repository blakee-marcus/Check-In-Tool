import { gql } from '@apollo/client';

export const QUERY_DAY = gql`
  query GetDay($date: String!) {
    getDay(date: $date) {
      date
      customers {
        _id
        checkInTime
        locationWaiting
        lastTouch {
          _id
          username
        }
        name
        status
      }
    }
  }
`;
