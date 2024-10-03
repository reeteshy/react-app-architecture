import React from 'react'
import Layout from './layouts/Layout'
import profileImage from '../../assets/img/user4-128x128.jpg'

function MyProfile() {
    return (
        <>
            <Layout >

                <div className="content-wrapper">

                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>My Profile</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Blank Page</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">


                                    <div className="card card-primary card-outline">
                                        <div className="card-body box-profile">
                                            <div className="text-center">
                                                <img className="profile-user-img img-fluid img-circle /"
                                                    src={profileImage}
                                                    alt="User profile picture" />
                                            </div>
                                            <strong><i className="fas fa-book mr-1"></i> Education</strong>

                                            <p className="text-muted">
                                                B.S. in Computer Science from the University of Tennessee at Knoxville
                                            </p>

                                            <hr />

                                            <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>

                                            <p className="text-muted">Malibu, California</p>

                                            <hr />

                                            <strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>

                                            <p className="text-muted">
                                                <span className="tag tag-danger">UI Design</span>
                                                <span className="tag tag-success">Coding</span>
                                                <span className="tag tag-info">Javascript</span>
                                                <span className="tag tag-warning">PHP</span>
                                                <span className="tag tag-primary">Node.js</span>
                                            </p>

                                            <hr />

                                            <strong><i className="far fa-file-alt mr-1"></i> Notes</strong>

                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-9">

                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">About Me</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-pane" id="settings">
                                                <form className="form-horizontal">
                                                    <div className='row'>

                                                        <div className="col-sm-6">
                                                            <div className="form-group ">
                                                                <label htmlFor="inputName">Name</label>
                                                                <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                                            </div>
                                                        </div>

                                                    <div className="col-sm-6">
                                                        <div className="form-group ">
                                                            <label htmlFor="inputEmail">Email</label>
                                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className='row'>

                                                    <div className="col-sm-6">
                                                        <div className="form-group ">
                                                            <label htmlFor="inputName2">Name</label>
                                                            <input type="text" className="form-control" id="inputName2" placeholder="Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="form-group ">
                                                            <label htmlFor="inputSkills">Skills</label>
                                                                <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        
                                                    <div className="form-group ">
                                                            <label htmlFor="inputExperience">Experience</label>
                                                            <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                            <button type="submit" className="btn btn-danger">Update Profile</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Change Password</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-pane" id="settings">
                                                <form className="form-horizontal">
                                                    <div className='row'>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label htmlFor="inputName" >Current Password</label>
                                                                <input type="password" className="form-control" id="inputName" placeholder="Current Password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label htmlFor="inputName">New Password</label>
                                                                <input type="password" className="form-control" id="inputName" placeholder="New Password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label htmlFor="inputName">Confirm New Password</label>
                                                                <input type="password" className="form-control" id="inputName" placeholder="Confirm New Password" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                                <button type="submit" className="btn btn-danger">Change Password</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div >
                            </div >

                        </div >
                    </section >

                </div >
            </Layout >
        </>
    )
}

export default MyProfile