import styled from 'styled-components';

const Loader = ({ setLoading }) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    })
    return (
    <Contain>Loader</Contain>
  )
}
export default Loader;

const Contain = styled.div`
    color:#000;
`