import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
        <Text style={styles.memoHeaderDate}>2025年10月1日 10:00</Text>
      </View>
      <ScrollView style={styles.memoContent}>
        <Text style={styles.memoContentText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton  onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
        <Icon name="pencil" size={40} color="#fff" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoHeaderTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32
  },
  memoHeaderDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16
  },
  memoContent: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 19
  },
  memoContentText: {
    fontSize: 16,
    lineHeight: 24
  }
})

export default Detail
