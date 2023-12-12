export default async function TempPage() {

  const data = await fetch('http://localhost:3000/api/db')

  console.log(data)
  console.log('hi')

  return (
    <div className="text-white">
    
    </div>
  )
}
