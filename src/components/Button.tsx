import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  label: string
  onPress?: () => void
}

const Button = (props: Props) => {
  const { label, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
      backgroundColor: '#004390',
      height: 48,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 32,
      paddingVertical: 8,
      paddingHorizontal: 24
    }
})

export default Button
