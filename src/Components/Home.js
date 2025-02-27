import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {isPending, data: blogs, error} = useFetch("http://localhost:8000/blogs");
 
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}
 
export default Home;