import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './index.css';
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const {data , isPending , error} = useFetch("http://localhost:8000/blogs/"+ id);

    return ( 
        <div className="blog-details">
        { error && <div> { error } </div>}
        { isPending && <div>Loading .....</div>}
        { data && (
            <article>
                <h2> {data.title }</h2>
                <p>Writed by : {data.author}</p>
                <div>{data.body}</div>
            </article>
        )}
        </div>
     );
}
 
export default BlogDetails;