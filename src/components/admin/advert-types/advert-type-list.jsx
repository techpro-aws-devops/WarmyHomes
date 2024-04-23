"use client"
import React from 'react';
import Link from "next/link";
import DataTable, { Column } from '@/components/common/form-fields/data-table';

const AdvertTypeList = ({ data }) => {

  const { title } = data;
  console.log(data)
  console.log(title)

  return (
    <>
      <div className="container">
        <h2>AdvertType List</h2>
        <Link
				href="/admin/advert-types/new"
				className="btn btn-dark mb-3"
			>
				New
			</Link>
      <DataTable 
      title="Custom Table" 
      dataSource={data} 
      dataKey="id"
       pagination={false}>
        
      <Column index={true} title="#" />
      <Column title="Title" field="title" />
    </DataTable>
      </div>
    </>
  );
};

export default AdvertTypeList;
