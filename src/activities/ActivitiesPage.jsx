import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

export default function ActivitiesPage() {
  const { token } = useAuth();
  const { data } = useQuery("/activities");
  const { mutate } = useMutation('POST', '/activities');
  // const { mutate } = useMutation('DELETE', '/activities/id');
  const forming = (formdata) => {
    const name = formdata.get('thename');
    const description = formdata.get('thedescription');
    mutate({ name, description });
  }

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      {!token
        ?
        <ul>
          {data &&
            data.map((obj) => (
              <li key={obj.id}>{obj.name}</li>
            )
            )
          }
        </ul>
        :
        <ul>  {data &&
          data.map((obj) => (
            <li key={obj.id}>{obj.name}<br /><button>Delete</button></li>
          )
          )
        }
          <h1>Add a new activity</h1>
          <form action={forming}>
            <label>
              Name <input name='thename' />
            </label>
            <label>
              Description <input name='thedescription' />
            </label>
            <button>Add activity</button>
          </form>
        </ul>

      }
    </>
  )
}
