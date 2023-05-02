import { sql } from "@vercel/postgres";

const likes = 100;
const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
