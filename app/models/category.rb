class Category
  include Mongoid::Document

  field :name

  has_and_belongs_to_many :project
end
