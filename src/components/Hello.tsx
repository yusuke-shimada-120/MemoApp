import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children?: React.ReactNode  // children を optional にして ReactNode に
  bang: boolean
  style?: TextStyle
}

const Hello = (props: Props) => {
  const { children, bang, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children ? children.toString() : ''}{bang ? '!' : ''}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
