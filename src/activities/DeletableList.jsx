import useMutation from "../api/useMutation";

const DeletableList = ({ activityObj }) => {
  const { mutate } = useMutation('DELETE', `/activities/${activityObj.id}`, ['1st']);
  return (
    <li key={activityObj.id}>
      {activityObj.name}<br />
      <button onClick={() => mutate({ activityObj })}>
        Delete
      </button>
    </li>

  )
}

export default DeletableList;