export default function ({ store, redirect}) {
  // If the user is not authenticated
  console.log(store.state.authorized)
  if (!store.state.authorized) {
    return redirect('/login')
  }
}
