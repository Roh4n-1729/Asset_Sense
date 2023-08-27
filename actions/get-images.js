import cloudinary  from 'cloudinary'


async function getImages() {
  const results =( await cloudinary.v2.search
    .expression('dam')
    .sort_by("created_at", "desc")
    .max_results(1000)
    .execute()
  )

  return results;

}

export default getImages