<p align="center"><img src="https://storage.googleapis.com/react-redux-sync/project_cover.png" alt="header image" width="500px"></p>

# ReactReduxSync

<p>
  Proof of concept application to test if it's possible to use Redux as kind of middleware to combine data from multiple sources (for example AWS AppSync and public API).
</p>

### Current concerns

- Introduced in React Context API might replace redux in future
- Currently (3/16/2019) **react-redux** breaks TDD approach for using **shallow** for connected components. (See [store as a prop is not allowed](https://github.com/reduxjs/react-redux/issues/1161)

## 📄 License

MIT License
