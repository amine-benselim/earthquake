import { connect } from "react-redux";
import { fetchData } from "../actions/actionCreators";
import Data from "../components/data";

const mapStateToProps = (state = { data: [], error: null, loading: false }) => {
  const { data, error, loading } = state;
  return {
    data,
    error,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
