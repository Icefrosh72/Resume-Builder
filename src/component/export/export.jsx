import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const MyDocument = ({ formData }) => {
  return (
    <Document>
      <Page>
        <Text>{formData.fullName}</Text>
        <Text>{formData.email}</Text>
        <Text>{formData.education}</Text>
        <Text>{formData.experience}</Text>
        <Text>{formData.skills}</Text>
      </Page>
    </Document>
  )
}
const Export = ({ formData }) => {
  
  return (
    <div className="export-container">
      <PDFDownloadLink document={<MyDocument formData={formData}/>} fileName='resume.pdf'>
        {({
          blob, url, loading, error
        }) => (
          loading ? 'Loading document...' : 'Export PDF'
        )}
      </PDFDownloadLink>
    </div>
  )
}

export default Export;
