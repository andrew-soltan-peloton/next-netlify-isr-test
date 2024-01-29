export default async function GET(request, res) {
  const {path} = request.query;
 
  if (path) {
    res.revalidate(path)
    return res.json({ revalidated: true, now: Date.now() })
  }
 
  return res.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  })
}