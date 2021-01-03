import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const BucketLists = () => {
    const [bucketlist, setBucketList] = useState([]);
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        getBucketList();
    }, []);

    // Create
    const onSubmitBucketList = async e => {
        e.preventDefault()
        const { title, description } = e.target
        await axios.post('/api/bucketlist', {
            title: title.value,
            description: description.value,
        })
        title.value = ''
        description.value = ''
        getBucketList()
    }

    // Read
    const getBucketList = async () => {
        const res = await axios.get('/api/bucketlist')
        const data = res.data
        setBucketList(data)
    }

    // Update
    const onSubmitEdits = async (e, id) => {
        e.preventDefault()
        const { title, description } = e.target
        await axios.post(`/api/bucketlist/update/${id}`, {
            title: title.value,
            description: description.value,
        })
        setEditing(null)
        getBucketList()
    }

    // Delete
    const deleteBucketList = async bucketlistToDelete => {
        await axios({
            method: 'DELETE',
            url: '/api/bucketlist/',
            data: {
                id: bucketlistToDelete,
            },
        })
        await getBucketList()
    }

    return (
        <div className="App">
            <div className="DataInput">
                <h2>Enter Bucket List Item:</h2>
                <form onSubmit={e => onSubmitBucketList(e)}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" />
                
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" />
                    <button>Add Bucket List Item</button>
                </form>
            </div>
            <div className="DataOutput">
                {bucketlist.map(bucketlist => (
                    <div key={bucketlist._id}>
                        {editing !== bucketlist._id ? (
                            <div key={bucketlist._id} className="DataOutput__card">
                                <div className="DataOutput__card--details">
                                    <div>
                                        <span>Title:</span>
                                        {bucketlist.title}
                                    </div>
                            
                                    <div>
                                        <span>Description:</span>
                                        {bucketlist.description}
                                    </div>
                                </div>
                                <div className="DataOutput__card--options">
                                    <button onClick={() => setEditing(bucketlist._id)}>Edit</button>
                                    <button onClick={() => deleteBucketList(bucketlist._id)}>Delete</button>
                                </div>
                            </div>
                        ) : (
                                <div key={bucketlist._id} className="DataOutput__editing">
                                    <form onSubmit={e => onSubmitEdits(e, bucketlist._id)}>
                                        <div className="DataOutput__editing--option">
                                            <label htmlFor="title">Title:</label>
                                            <input type="text" name="title" defaultValue={bucketlist.title} />
                                        </div>
                                     
                                        <div className="DataOutput__editing--option">
                                            <label htmlFor="description">Description:</label>
                                            <input type="text" name="description" defaultValue={bucketlist.description} />
                                        </div>
                                        <div>
                                            <button type="Submit">Submit</button>
                                            <button
                                                className="DataOutput__editing--cancel"
                                                onClick={() => setEditing(null)}
                                            >
                                                Cancel
              </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BucketLists;