// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// const MainBody = () => {
//   let [state, setState] = useState({
//     quote: "",
//     author: "",
//     id: Date.now()
//   })
//   let [api, setApi] = useState([])

//   useEffect(() => {
//     axios.get(`http://localhost:3000/quotes`).then((resp) => { setApi(resp.data) })
//   }, [])
//   let { quote, author, id } = state
//   let handleChange = (e) => {
//     let { name, value } = e.target
//     setState({ ...state, [name]: value })
//   }
//   let handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(state)
//     axios.post(`http://localhost:3000/quotes`, state).then(() => {
//       axios.get(`http://localhost:3000/quotes`).then((resp) => setApi(resp.data))
//     })


//     setState({
//       quote: "",
//       author: "",
//       id: Date.now()
//     })
//   }

//   return (
//     <div id='homeBg' className='w-[75vw] h-[91.3vh]'>
//       <div className='w-[100%] h-[48vh] flex justify-center items-center'>
//         <form action="">
//           <input placeholder='Enter Your Quote' className='w-[30vw] h-[4vh] p-[20px] m-3' type="text" name='quote' value={quote} onChange={handleChange} /> <br />
//           <input placeholder='Enter Your Name' className='w-[30vw] h-[4vh] p-[20px] m-3' type="text" name='author' value={author} onChange={handleChange} /> <br />
//           <Button className='w-[30vw] h-[4vh] p-[20px] m-3 flex justify-center items-center' onClick={handleSubmit} variant="success">Create</Button>
//         </form>
//       </div>

//       <div className='flex flex-wrap  '>
//         {
//           api.length > 0 && api.map((obj, i) => {
//             return (
//               <div key={i} className='w-[20vw] m-4 bg-gray-200 p-5' id='card'>
//                 <p>Quote  : {obj.quote}</p>
//                 <p>Author : {obj.author}</p>
//                 <div className='flex justify-around mt-6'>

//                   <Button variant="primary">Update</Button>
//                   <Button variant="danger">Delete</Button>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default MainBody











import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
const MainBody = () => {
  let [state, setState] = useState({
    quote: "",
    author: "",
    id: Date.now().toString()
  })
  let [api, setApi] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/quotes`).then((resp) => { setApi(resp.data) })
  }, [])
  let { quote, author, id } = state
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    axios.post(`http://localhost:3000/quotes`, state).then(() => {
      axios.get(`http://localhost:3000/quotes`).then((resp) => setApi(resp.data))
    })


    setState({
      quote: "",
      author: "",
      id: Date.now().toString()
    })
  }

  let handleDelete = (id) => {
    axios.delete(`http://localhost:3000/quotes/${id}`).then(() => {
      axios.get(`http://localhost:3000/quotes`).then((resp) => {
        setApi(resp.data)
      })
    })
  }

  let handleUpdate = (id) => {
    axios.delete(`http://localhost:3000/quotes/${id}`).then(() => {
      axios.get(`http://localhost:3000/quotes`).then((resp) => {
        setApi(resp.data)
      })
    })
    let objToUpdate = api.find((val, i) => {
      return val.id == id
    })
    setState({
      author: objToUpdate.author,
      quote: objToUpdate.quote,
      id: objToUpdate.id
    })
  }

  return (
    <div id='homeBg' className='w-[75vw] h-[91.3vh]'>
      <div className='w-[100%] h-[48vh] flex justify-center items-center sticky top-0 z-0'>
        <form action="">
          <h1 className='text-center text-white font-extrabold text-5xl flex flex-col justify-center items-center '  >Create Your Own Quote</h1>
          <div className='ps-10'>
            <input placeholder='Enter Your Quote' className='w-[30vw] h-[4vh] p-[20px] m-3' type="text" name='quote' value={quote} onChange={handleChange} /> <br />
            <input placeholder='Enter Your Name' className='w-[30vw] h-[4vh] p-[20px] m-3' type="text" name='author' value={author} onChange={handleChange} /> <br />
            <Button className='w-[30vw] h-[4vh] p-[20px] m-3 flex justify-center items-center' onClick={handleSubmit} variant="success">Create</Button>
          </div>
        </form>
      </div>

      <div className='flex flex-wrap border-[1px] border-black bg-[#0000006d] relative z-10 '>
        {
          api.length > 0 && api.map((obj, i) => {
            return (
              <div key={i} className='w-[20vw] m-4 bg-gray-200 p-5' id='card'>
                <p>Quote  : {obj.quote}</p>
                <p>Author : {obj.author}</p>
                <div className='flex justify-around mt-6'>

                  <Button onClick={() => { handleUpdate(obj.id) }} variant="primary">Update</Button>
                  <Button onClick={() => { handleDelete(obj.id) }} variant="danger">Delete</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MainBody
