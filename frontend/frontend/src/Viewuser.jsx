const Viewuser = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {props.us.length > 0 ? (
                        props.us.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td><button>edit</button><button>delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <p> no data show </p>
                    )}

                </tbody>
            </table>
        </div>
    )
}
export default Viewuser;