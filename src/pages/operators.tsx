import React from "react";
import Layout from "../../components/layout";
import { useFetch } from "../../lib/fetchData";

interface Props {
  name: string;
  rarity: number;
  tags: string[] | string;
  art: string[] | string;
}

export const getStaticProps = async () => {
  const response = await fetch("https://rhodesapi.up.railway.app/api/operator");
  const data = await response.json();
  const compressedData = await data.map(
    ({ name, rarity, tags, art }: Props) => ({ name, rarity, tags, art })
  );

  return {
    props: {
      data,
    },
  };
};

const Rodhes: React.FC<{ data: Props }> = ({ data }) => {
  console.log(data);

  return (
    <Layout title="Arknights operators">
      <div>lol</div>
    </Layout>
  );
};

export default Rodhes;
