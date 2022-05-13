export default function createComment (data,id)  {
    return fetch(`/api/resources/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };