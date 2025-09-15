import { TouchableOpacity, Text, StyleSheet } from "react-native"

const LogOutButton = () => {
  return (
    <TouchableOpacity>
      <Text style={style.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: '#fff'
    }
})

export default LogOutButton
