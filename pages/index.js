import Head from 'next/head'

console.log(process.version);

const Home = () => (
  <div className="container">
    <Head>
      <title>Serverless - Next.js</title>
      <meta name="description" content="Serverless Next.js 应用"/>
      <meta name="keywords" content="next,next.js,serverless,无服务"/>
      <link rel="icon" href={`${process.env.STATIC_URL}/favicon.ico`} />
    </Head>

    <main>
      <h1 className="title">欢迎访问文曲星官网，敬请期待</h1>
    </main>
  </div>
)

export default Home
