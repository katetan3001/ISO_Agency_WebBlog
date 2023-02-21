import { useEffect } from "react"

const useScript = (url, integrity) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url

    if (integrity) {
      script.integrity = integrity
    }


    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url, integrity])
}

export default useScript