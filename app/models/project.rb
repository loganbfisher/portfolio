class Project
  include Mongoid::Document
  include Mongoid::Paperclip

  has_mongoid_attached_file :hero_image, :styles => { :medium => "431x300>", :thumb => "431x1200>", :top => "400x100#" }, :default_url => "/images/:style/missing.png"
  has_mongoid_attached_file :page_main_image, :styles => { :medium => "1200x820>" }, :default_url => "/images/:style/missing.png"

  field :name, type: String
  field :employer, type: String
  field :description, type: String
  field :created_at, type: DateTime
  field :hero_image, type: File

  validates_presence_of :name, :description
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :tags
end