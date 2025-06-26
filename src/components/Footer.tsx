

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-800 h-[10vh] text-white py-4'>
        <div className='container mx-auto text-center'>
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
