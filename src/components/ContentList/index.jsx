import React, { useCallback } from 'react'
import './index.css'

const ContentList = ({ content, isLoading}) => {
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="main" ref={setRef} style={{  minHeight: 500 }}>
      {isLoading ? <div>Loading...</div> : (
         <div className="userList">
         {content.map(user => (
           <div className="user" key={user.id}>
             <div className="user_inner">
               <div className="user-img"><img src={user.image} alt="user" /></div>
               <div className="user-name"><h4>{user.name}</h4></div>
            </div>
           </div>
         ))}
       </div>
      )}
    </div>
   
  )
}

export default ContentList
