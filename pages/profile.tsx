import { useEffect, useState } from "react";
import { profile, tokenService } from "../lib/api";


export default function ProfilePage() {
  const token = tokenService.tokenValue;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    profile(token).then(p => {
      setData(p);
      setLoading(false);
    })
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No profile found.</p>

  return <div>{data.email}</div>
}

