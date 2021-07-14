import '../App.css' 

const Post = ({data, isPanding, setPage, page}) => {

    return ( 
        <>
           <div className = 'posts'>
                {isPanding && <div>Loading...</div>}
                {data && data.results.map(item => (
                    <div className = 'post-item' key = {item.id}>
                        <img key = {item.id} src={item.urls.small}/>
                        <div className="post-item-hover">
                           <div className="post__hover">
                                <div className="author">
                                    <img src={item.user.profile_image.large} alt=""/>
                                    <h3 className = 'author__name'>{item.user.name}</h3>
                                </div>
                               <div className="download__btn">
                                   <a download target = '_blank' className = 'dow__link' href = {item.links.download + "?force=true"}>Download</a>
                               </div>
                           </div>
                        </div>
                    </div>  
                ))}
                    <button onClick = {() => setPage(page+1)}>Next</button>
           </div>
        </>
     )
}
 
export default Post;