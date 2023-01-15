import ContentLoader from 'react-content-loader';


const Loader = () => {
  return (
    <ContentLoader 
      speed={2}
      width={160}
      height={265}
      viewBox="0 0 156 265"
      backgroundColor="#d3d3da"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="168" rx="7" ry="7" width="160" height="15" /> 
      <rect x="0" y="0" rx="11" ry="11" width="160" height="155" /> 
      <rect x="0" y="190" rx="7" ry="7" width="100" height="15" /> 
      <rect x="0" y="237" rx="7" ry="7" width="80" height="26" /> 
      <rect x="120" y="234" rx="9" ry="9" width="32" height="32" />
    </ContentLoader>
  )
}

export default Loader