import React from 'react'
import Layout from './layouts/Layout'
import DataTable from './components/DataTable'
import { useGetEmrcUsersByNameQuery } from '../../services/ermcApi'

function Users() {

  const { data, error, isloading } = useGetEmrcUsersByNameQuery()

  console.log("data data", data?.users)

  return (
    <>
    <Layout >
      {error ? (
        <>Oh no, there was an error</>
      ) : isloading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data?.users?.name}</h3>
          <DataTable users={data?.users} />
        </>
      ) : null}
    </Layout>
    </>
  )
}

export default Users