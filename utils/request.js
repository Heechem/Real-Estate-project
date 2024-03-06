const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties

async function fetchProperties() {
  try {
    // CHECK THE DOMAIN ISNT AVAIALBLE YET

    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, {
      next: { revalidate: 0 },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch single property

// async function fetchProperty() {
//   try {
//     // CHECK THE DOMAIN ISNT AVAIALBLE YET

//     if (!apiDomain) {
//       return null;
//     }

//     const res = await fetch(`${apiDomain}/properties/${id}`);

//     return res.json();
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
