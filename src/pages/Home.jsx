import React from 'react'
import { useGetBlogsQuery } from '../redux/blogApi'

const Home = () => {
    const { data } = useGetBlogsQuery()
    return <>
        <div className="container mt-5">
            <div className="row">
                {

                    data && data.map(item => <div className='col-sm-3' >
                        <div class="card">
                            <img src={item.hero} className='img-fluid' />
                            <div class="card-body">
                                <h6>{item.title}</h6>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    </>

}

export default Home