import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ]
}

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', file[0]);
        ev.preventDefault();

        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
        });
        response.json();
    }
    return(
        <form>
            <input type="title" 
                placeholder={'Title'} 
                value={title} 
                onChange={ev => setTitle(ev.target.value)}/>
            <input type="text" 
                placeholder={"Summary"}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}/>
            <input type="file" value={file} 
            onChange={ev => setFile(ev.target.files)}/>
            <ReactQuill 
                value={content}
                onChange={newValue => setContent(newValue)} 
                modules={modules}/>
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    )
}