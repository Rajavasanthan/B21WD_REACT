export default function UserList(props){
    console.log(props)
    return <>
        <h1>{props.data.name} {props.data.isFolder ? "Folder" : "-"}</h1>
    </>
}