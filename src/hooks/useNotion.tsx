import { useState, useEffect } from 'react'
import axios from 'axios'

import { INotion } from '../interface/hooksInterface'

export const useNotion = () => {

    const [ blogData, setBlogData ] = useState<any>()
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    useEffect(() => {
      try {
        const fetchData = async () => {
          const result: INotion[] = await axios
            .get(
              "https://notion-api.splitbee.io/v1/table/d2da73724c8d4d7e907e5aa725eacd0c"
            )
            .then((res) => res.data);

          console.log(result);
          setBlogData(result);
          setIsLoading(!isLoading)
        };

        fetchData();
      } catch (e) {
        console.log(e);
      }
    }, []);

    return [
        blogData, isLoading
    ]
}