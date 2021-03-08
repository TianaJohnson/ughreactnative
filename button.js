import React from 'react'

export const button = () => {
    return (
        <View>
            <button style={styles.button}>
                Push
            </button> 
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: "#5c32a8",
        height: 40,
        width: 50,
        border: 1,
        fontWeight: 'bold',
      },
})
