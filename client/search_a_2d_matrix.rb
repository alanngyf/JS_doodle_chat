# Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.
# For example,

# Consider the following matrix:

# [
#   [1,   3,  5,  7],
#   [10, 11, 16, 20],
#   [23, 30, 34, 50]
# ]
# Given target = 3, return true.

#Method 1: Binary search twice
def search_matrix(matrix, target)
  if matrix === nil || matrix.length === 0
    return false
  end
  if matrix[0] === nil || matrix[0].length === 0
    return false
  end

#find the row
  low = 0
  high = matrix.length - 1
  row = 0

  while low + 1 < high
    mid = low + (high - low) / 2
    if matrix[mid][0] === target
      return true
    elsif matrix[mid][0] < target
      low = mid
    else
      high = mid
    end
  end

    if matrix[high][0] <= target
      row = high
    elsif matrix[low][0] <= target
      row = low
    else
      return false
    end

#search for target in the row
    low = 0
    high = matrix[row].length - 1

    while low + 1 < high
      mid = low + (high - low) / 2
      if matrix[row][mid] === target
        return true
      elsif matrix[row][mid] < target
        low = mid
      else
        high = mid
      end
    end

    if matrix[row][high] === target
      return true
    elsif matrix[row][low] === target
      return true
    else
      return false
    end
end

#Method2: Binary search once
def search_matrix(matrix, target)
  if matrix.nil? || matrix.length === 0
    return false
  end
  if matrix[0].nil? || matrix[0].length === 0
    return false
  end

  column = matrix[0].length
  low = 0
  high = matrix.length * column - 1

  while low + 1 < high
    mid = low + (high - low) / 2
    mid_value = matrix[mid / column][mid % column]
    if mid_value === target
      return true
    elsif mid_value < target
      low = mid
    else
      high = mid
    end
  end

  if matrix[high / column][high % column] === target
    return true
  elsif matrix[low / column][low % column] === target
    return true
  else
    return false
  end
end





























