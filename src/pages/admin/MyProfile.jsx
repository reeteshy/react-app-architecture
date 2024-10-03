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


                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">


                                    <div class="card card-primary card-outline">
                                        <div class="card-body box-profile">
                                            <div class="text-center">
                                                <img class="profile-user-img img-fluid img-circle /"
                                                    src={profileImage}
                                                    alt="User profile picture" />
                                            </div>
                                            <strong><i class="fas fa-book mr-1"></i> Education</strong>

                                            <p class="text-muted">
                                                B.S. in Computer Science from the University of Tennessee at Knoxville
                                            </p>

                                            <hr />

                                            <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                                            <p class="text-muted">Malibu, California</p>

                                            <hr />

                                            <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                                            <p class="text-muted">
                                                <span class="tag tag-danger">UI Design</span>
                                                <span class="tag tag-success">Coding</span>
                                                <span class="tag tag-info">Javascript</span>
                                                <span class="tag tag-warning">PHP</span>
                                                <span class="tag tag-primary">Node.js</span>
                                            </p>

                                            <hr />

                                            <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-9">

                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">About Me</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-pane" id="settings">
                                                <form class="form-horizontal">
                                                    <div className='row'>

                                                        <div class="col-sm-6">
                                                            <div class="form-group ">
                                                                <label for="inputName">Name</label>
                                                                <input type="email" class="form-control" id="inputName" placeholder="Name" />
                                                            </div>
                                                        </div>

                                                    <div class="col-sm-6">
                                                        <div class="form-group ">
                                                            <label for="inputEmail">Email</label>
                                                            <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className='row'>

                                                    <div class="col-sm-6">
                                                        <div class="form-group ">
                                                            <label for="inputName2">Name</label>
                                                            <input type="text" class="form-control" id="inputName2" placeholder="Name" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="form-group ">
                                                            <label for="inputSkills">Skills</label>
                                                                <input type="text" class="form-control" id="inputSkills" placeholder="Skills" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        
                                                    <div class="form-group ">
                                                            <label for="inputExperience">Experience</label>
                                                            <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                            <button type="submit" class="btn btn-danger">Update Profile</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Change Password</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-pane" id="settings">
                                                <form class="form-horizontal">
                                                    <div className='row'>
                                                        <div class="col-sm-4">
                                                            <div class="form-group">
                                                                <label for="inputName" >Current Password</label>
                                                                <input type="password" class="form-control" id="inputName" placeholder="Current Password" />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="form-group">
                                                                <label for="inputName">New Password</label>
                                                                <input type="password" class="form-control" id="inputName" placeholder="New Password" />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="form-group">
                                                                <label for="inputName">Confirm New Password</label>
                                                                <input type="password" class="form-control" id="inputName" placeholder="Confirm New Password" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group ">
                                                                <button type="submit" class="btn btn-danger">Change Password</button>
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