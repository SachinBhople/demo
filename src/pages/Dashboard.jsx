import React, { useState } from 'react'
import { useAddBlogMutation, useDeltedBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/blogApi'

const Dashboard = () => {
    const { data } = useGetBlogsQuery()
    const [addblog] = useAddBlogMutation()
    const [updateBlog] = useUpdateBlogMutation()
    const [deleteBlog] = useDeltedBlogMutation()
    const [blogData, setBlogData] = useState()
    const [selted, setSelted] = useState({})

    const handleChange = e => {
        const { value, name } = e.target
        setBlogData({ ...blogData, [name]: value })
    }
    return <>
        <div className="container">
            <div className="text-end my-5">
                <button data-bs-toggle="modal" data-bs-target="#add" type="button" class="btn btn-primary">Add Blog</button>
            </div>
            {
                data && <table className='table table-borderd'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>desc</th>
                            <th>Hero</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <img src={item.hero} height={100} />
                            </td>
                            <td>
                                <button type="button" onClick={e => setSelted(item)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit">edit</button>
                                <button type="button"
                                    onClick={e => deleteBlog(item.id)} class="btn btn-primary">delte</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            }
        </div>

        {/* add  */}

        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input placeholder='enter title' className='form-control my-2' name='title' onChange={handleChange} type="text" />
                        <input placeholder='enter desc' className='form-control my-2' name='desc' onChange={handleChange} type="text" />
                        <input placeholder='enter hero' className='form-control my-2' name='hero' onChange={handleChange} type="text" />
                        <button type="button" class="btn btn-primary"
                            onClick={e => addblog(blogData)} data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        {/* add  */}

        {/* edit  */}

        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input value={selted.title} placeholder='enter title' className='form-control my-2' name='title' onChange={e => setSelted({ ...selted, title: e.target.value })} type="text" />
                        <input value={selted.desc} placeholder='enter desc' className='form-control my-2' name='desc' onChange={e => setSelted({ ...selted, desc: e.target.value })} type="text" />
                        <input value={selted.hero} placeholder='enter hero' className='form-control my-2' name='hero' onChange={e => setSelted({ ...selted, hero: e.target.value })} type="text" />

                        <button type="button" onClick={e => updateBlog(selted)} data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        {/* edit  */}
    </>

}

export default Dashboard