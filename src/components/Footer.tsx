

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
