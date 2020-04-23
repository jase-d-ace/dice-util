import React from 'react';
import { Query } from '@apollo/react-components';
import { ALL_NOTES } from '../constants';
 
const NoteQuery = () => (
  <Query query={ALL_NOTES}>
    {
      ({ loading, err, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (err) return <h1> We messed up...</h1>;
        return data.notes.map( ({ id, title, content, author }) => <div key={id}><h1>{title}</h1><p>{content}</p>by, <p>{author}</p></div> )

      }
    }
  </Query>
);

export default NoteQuery;
