

export default function What() {
  return (
    <div className="">
      <div className="blue-gradient min-h-screen w-screen"></div>
    </div>
  )
}

export async function getStaticProps() {

  return {
    props: {
      active: "WHAT",
    },
  };
}